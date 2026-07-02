package models

type Block struct {
	Height      int    `json:"height"`
	Hash        string `json:"hash"`
	Miner       string `json:"miner"`
	Reward      string `json:"reward"`
	Confirmations int  `json:"confirmations"`
	Time        string `json:"time"`
}