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

	handler := middleware.CORS(http.DefaultServeMux)

	log.Println("🚀 PRL Forge API running on :8080")

	log.Fatal(http.ListenAndServe(":8080", handler))
}