package models

type Miner struct {
	Wallet    string `json:"wallet"`
	Hashrate  string `json:"hashrate"`
	Workers   int    `json:"workers"`
	Status    string `json:"status"`
}