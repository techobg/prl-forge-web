package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/techobg/prl-forge-web/backend/internal/services"
)

func BlockDetailsHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	heightStr := r.URL.Query().Get("height")

	if heightStr == "" {
		http.Error(w, "missing height", http.StatusBadRequest)
		return
	}

	height, err := strconv.Atoi(heightStr)
	if err != nil {
		http.Error(w, "invalid height", http.StatusBadRequest)
		return
	}

	block := services.GetBlock(height)

	if err := json.NewEncoder(w).Encode(block); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}