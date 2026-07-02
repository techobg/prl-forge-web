package models

type Payment struct {
	TxID      string `json:"txid"`
	Address   string `json:"address"`
	Amount    string `json:"amount"`
	Timestamp string `json:"timestamp"`
	Status    string `json:"status"`
}