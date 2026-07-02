package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetMiners() []models.Miner {
	return []models.Miner{
		{
			Wallet:   "PRL1q7h...82KD",
			Hashrate: "823 GH/s",
			Workers:  3,
			Status:   "Online",
		},
		{
			Wallet:   "PRL1af3...91LM",
			Hashrate: "2.14 TH/s",
			Workers:  8,
			Status:   "Online",
		},
		{
			Wallet:   "PRL1cd8...6XQP",
			Hashrate: "412 GH/s",
			Workers:  1,
			Status:   "Offline",
		},
	}
}