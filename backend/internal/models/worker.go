package models

type Worker struct {
	Name      string `json:"name"`
	Hashrate  string `json:"hashrate"`
	Shares    int    `json:"shares"`
	LastShare string `json:"lastShare"`
	Status    string `json:"status"`
}