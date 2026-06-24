package handlers

import (
	"encoding/json"
	"net/http"
)

type StatsResponse struct {
	PoolHashrate string  `json:"poolHashrate"`
	Miners       int     `json:"miners"`
	Workers      int     `json:"workers"`
	NetworkHeight int    `json:"networkHeight"`
	Difficulty   string  `json:"difficulty"`
	PoolLuck     int     `json:"poolLuck"`
	PoolFee      float64 `json:"poolFee"`
	Price        float64 `json:"price"`
}

func StatsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	stats := StatsResponse{
		PoolHashrate: "2.45 TH/s",
		Miners: 236,
		Workers: 487,
		NetworkHeight: 76123,
		Difficulty: "1.42 P",
		PoolLuck: 103,
		PoolFee: 0.5,
		Price: 0.184,
	}

	json.NewEncoder(w).Encode(stats)
}