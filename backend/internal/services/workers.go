package services

import (
	"encoding/json"
	"net/http"

	"github.com/techobg/prl-forge-web/backend/internal/models"
)

func GetWorkers() []models.Worker {

	resp, err := http.Get("http://localhost:8080/api/v1/workers")
	if err != nil {
		return []models.Worker{}
	}
	defer resp.Body.Close()

	type forgeWorker struct {
		Name      string  `json:"name"`
		Hashrate  float64 `json:"hashrate"`
		Shares    uint64  `json:"shares"`
		LastShare string  `json:"lastShare"`
		Status    string  `json:"status"`
	}

	var workers []forgeWorker

	if err := json.NewDecoder(resp.Body).Decode(&workers); err != nil {
		return []models.Worker{}
	}

	result := make([]models.Worker, 0, len(workers))

	for _, w := range workers {

		result = append(result, models.Worker{
			Name:      w.Name,
			Hashrate:  formatHashrate(w.Hashrate),
			Shares:    int(w.Shares),
			LastShare: w.LastShare,
			Status:    w.Status,
		})
	}

	return result
}
