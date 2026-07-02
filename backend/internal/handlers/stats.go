package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/services"
)

func StatsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	stats := services.GetStats()

	if err := json.NewEncoder(w).Encode(stats); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}