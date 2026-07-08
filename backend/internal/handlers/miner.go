package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/services"
)

func MinerHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	wallet := r.URL.Query().Get("wallet")
	if wallet == "" {
		http.Error(w, "missing wallet", http.StatusBadRequest)
		return
	}

	miner, err := services.GetMiner(wallet)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(miner)
}
