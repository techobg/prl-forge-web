package main

import (
	"log"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/handlers"
	"github.com/techobg/prl-forge-web/backend/internal/middleware"
)

func main() {

	http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(`{"status":"ok"}`))
	})

	http.HandleFunc("/api/stats", handlers.StatsHandler)

	http.HandleFunc("/api/status", handlers.StatusHandler)

	http.HandleFunc("/api/wallet", handlers.WalletHandler)

	http.HandleFunc("/api/workers", handlers.WorkersHandler)

	http.HandleFunc("/api/miners", handlers.MinersHandler)

	http.HandleFunc("/api/payments", handlers.PaymentsHandler)

	http.HandleFunc("/api/blocks", handlers.BlocksHandler)

	http.HandleFunc("/api/block", handlers.BlockDetailsHandler)

	handler := middleware.CORS(http.DefaultServeMux)

	log.Println("🚀 PRL Forge API running on :8081")

	log.Fatal(http.ListenAndServe(":8081", handler))
}