package services

import (
	"github.com/techobg/prl-forge-web/backend/internal/models"
)

func GetStats() models.Stats {

	return models.Stats{
		PoolHashrate:  "2.45 TH/s",
		Miners:        236,
		Workers:       487,
		NetworkHeight: 76123,
		Difficulty:    "1.42 P",
		PoolLuck:      103,
		PoolFee:       0.5,
		Price:         0.184,
	}

}