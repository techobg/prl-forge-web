package services

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
)

type MinerDashboard struct {
	Wallet          string  `json:"wallet"`
	CurrentHashrate float64 `json:"currentHashrate"`
	AverageHashrate float64 `json:"averageHashrate"`
	WorkersOnline   int     `json:"workersOnline"`
	LastSeen        string  `json:"lastSeen"`
	LastBlock       string  `json:"lastBlock"`
	PersonalLuck    float64 `json:"personalLuck"`
	Blocks24h       int     `json:"blocks24h"`
	TotalBlocks     int     `json:"totalBlocks"`
}

func GetMiner(wallet string) (*MinerDashboard, error) {
	endpoint := fmt.Sprintf(
		"http://localhost:8080/api/v1/miner?wallet=%s",
		url.QueryEscape(wallet),
	)

	resp, err := http.Get(endpoint)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var miner MinerDashboard
	if err := json.NewDecoder(resp.Body).Decode(&miner); err != nil {
		return nil, err
	}

	return &miner, nil
}
