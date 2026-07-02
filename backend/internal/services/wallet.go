package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetWallet(address string) models.Wallet {
	return models.Wallet{
		Address:        address,
		Hashrate:       "1.42 GH/s",
		Workers:        3,
		Shares:         1428,
		PendingBalance: "12.45 PRL",
		PaidBalance:    "2450.00 PRL",
	}
}