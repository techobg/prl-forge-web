package models

type Status struct {
	Online bool   `json:"online"`
	Version string `json:"version"`
	Uptime string `json:"uptime"`
}