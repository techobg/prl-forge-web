package services

import "github.com/techobg/prl-forge-web/backend/internal/models"

func GetStatus() models.Status {
	return models.Status{
		Online:  true,
		Version: "0.1.0-alpha",
		Uptime:  "3d 12h",
	}
}