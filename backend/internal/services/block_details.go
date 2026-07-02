package services

import (
	"fmt"

	"github.com/techobg/prl-forge-web/backend/internal/models"
)

func GetBlock(height int) models.Block {
	return models.Block{
		Height:        height,
		Hash:          fmt.Sprintf("00000000block%d", height),
		Miner:         "ForgeMiner01",
		Reward:        "25 PRL",
		Confirmations: 12,
		Time:          "2 min ago",
	}
}