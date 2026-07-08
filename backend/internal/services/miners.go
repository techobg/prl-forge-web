package services

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/models"
)

func GetMiners() []models.Miner {

	resp, err := http.Get("http://localhost:8080/api/v1/miners")
	if err != nil {
		return []models.Miner{}
	}
	defer resp.Body.Close()

	type forgeMiner struct {
		Wallet   string  `json:"wallet"`
		Hashrate float64 `json:"hashrate"`
		Workers  int     `json:"workers"`
		Status   string  `json:"status"`
	}

	var miners []forgeMiner

	if err := json.NewDecoder(resp.Body).Decode(&miners); err != nil {
		return []models.Miner{}
	}

	result := make([]models.Miner, 0, len(miners))

	for _, m := range miners {

		result = append(result, models.Miner{
			Wallet:   m.Wallet,
			Hashrate: formatHashrate(m.Hashrate),
			Workers:  m.Workers,
			Status:   m.Status,
		})
	}

	return result
}
