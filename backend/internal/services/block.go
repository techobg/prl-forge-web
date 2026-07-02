package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetBlocks() []models.Block {

	return []models.Block{

		{
			Height: 76123,
			Hash: "00000000af13...",
			Miner: "ForgeMiner01",
			Reward: "25 PRL",
			Confirmations: 12,
			Time: "2 min ago",
		},

		{
			Height: 76122,
			Hash: "00000000bc91...",
			Miner: "RTX4090-Rig",
			Reward: "25 PRL",
			Confirmations: 15,
			Time: "4 min ago",
		},

		{
			Height: 76121,
			Hash: "000000001ca2...",
			Miner: "Miner-X",
			Reward: "25 PRL",
			Confirmations: 18,
			Time: "6 min ago",
		},
	}
}