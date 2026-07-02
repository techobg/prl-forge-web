package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/services"
)

func WalletHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	address := r.URL.Query().Get("address")

	if address == "" {
		http.Error(w, "missing address", http.StatusBadRequest)
		return
	}

	json.NewEncoder(w).Encode(services.GetWallet(address))
}