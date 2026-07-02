package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetWorkers() []models.Worker {
	return []models.Worker{
		{
			Name:      "Rig-01",
			Hashrate:  "425 MH/s",
			Shares:    842,
			LastShare: "12 sec ago",
			Status:    "Online",
		},
		{
			Name:      "Rig-02",
			Hashrate:  "398 MH/s",
			Shares:    731,
			LastShare: "35 sec ago",
			Status:    "Online",
		},
		{
			Name:      "Rig-03",
			Hashrate:  "0 H/s",
			Shares:    0,
			LastShare: "15 min ago",
			Status:    "Offline",
		},
	}
}