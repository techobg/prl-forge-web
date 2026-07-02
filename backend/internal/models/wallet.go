package models

type Wallet struct {
	Address        string `json:"address"`
	Hashrate       string `json:"hashrate"`
	Workers        int    `json:"workers"`
	Shares         int    `json:"shares"`
	PendingBalance string `json:"pendingBalance"`
	PaidBalance    string `json:"paidBalance"`
}