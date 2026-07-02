package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetPayments() []models.Payment {
	return []models.Payment{
		{
			TxID:      "8af2d1e92f8c",
			Address:   "PRL123456789",
			Amount:    "125 PRL",
			Timestamp: "5 min ago",
			Status:    "Confirmed",
		},
		{
			TxID:      "4be61a88d112",
			Address:   "PRL987654321",
			Amount:    "42 PRL",
			Timestamp: "18 min ago",
			Status:    "Confirmed",
		},
	}
}