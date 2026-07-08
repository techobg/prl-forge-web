package models

type Stats struct {
	PoolHashrate  string  `json:"poolHashrate"`
	Miners        int     `json:"miners"`
	Workers       int     `json:"workers"`
	NetworkHeight int     `json:"networkHeight"`
	Difficulty    string  `json:"difficulty"`
	PoolLuck      float64 `json:"poolLuck"`
	PoolFee       float64 `json:"poolFee"`
	Price         float64 `json:"price"`
}
