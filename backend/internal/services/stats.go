package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/models"
)

func GetStats() models.Stats {

	type DashboardResponse struct {
		Pool struct {
			Hashrate float64 `json:"hashrate"`
		} `json:"pool"`

		Workers struct {
			Online int `json:"online"`
		} `json:"workers"`

		Network struct {
			Height     int64   `json:"height"`
			Difficulty float64 `json:"difficulty"`
			Hashrate   float64 `json:"hashrate"`
		} `json:"network"`

		Round struct {
			Luck float64 `json:"luck"`
		} `json:"round"`
	}

	resp, err := http.Get("http://localhost:8080/api/v1/dashboard")
	if err != nil {
		return models.Stats{}
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return models.Stats{}
	}

	fmt.Println("RAW JSON:")
	fmt.Println(string(body))

	var dashboard DashboardResponse
	if err := json.Unmarshal(body, &dashboard); err != nil {
		fmt.Println("UNMARSHAL ERROR:", err)
		return models.Stats{}
	}

	fmt.Printf("ROUND: %+v\n", dashboard.Round)

	return models.Stats{
		PoolHashrate:  formatHashrate(dashboard.Network.Hashrate),
		Miners:        dashboard.Workers.Online,
		Workers:       dashboard.Workers.Online,
		NetworkHeight: int(dashboard.Network.Height),
		Difficulty:    fmt.Sprintf("%.2f", dashboard.Network.Difficulty),
		PoolLuck:      dashboard.Round.Luck,
		PoolFee:       1.5,
		Price:         0,
	}
}

func formatHashrate(h float64) string {

	units := []string{
		"H/s",
		"KH/s",
		"MH/s",
		"GH/s",
		"TH/s",
		"PH/s",
	}

	i := 0

	for h >= 1000 && i < len(units)-1 {
		h /= 1000
		i++
	}

	return fmt.Sprintf("%.2f %s", h, units[i])
}
