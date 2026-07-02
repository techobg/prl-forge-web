package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/services"
)

func PaymentsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(services.GetPayments())
}