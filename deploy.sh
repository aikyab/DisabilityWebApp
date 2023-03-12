#!/bin/bash

echo "Creating postgres volume and config-map"
kubectl apply -f ./kubernetes/postgres-config.yaml
kubectl apply -f ./kubernetes/postgres-secrets.yaml
kubectl apply -f ./kubernetes/postgres-storage.yaml

echo "Creating the api server credentials..."
kubectl apply -f ./kubernetes/api-secret.yaml

echo "Creating the Postgres deployment and service..."
kubectl apply -f ./kubernetes/postgres-deployment.yaml
kubectl apply -f ./kubernetes/postgres-service.yaml

echo "Creating the FastAPI deployment and service..."
kubectl apply -f ./kubernetes/api-deployment.yaml
kubectl apply -f ./kubernetes/api-service.yaml

# echo "Creating the React deployment and service..."

# kubectl apply -f ./kubernetes/react-secret.yaml
# kubectl apply -f ./kubernetes/frontend-deployment.yaml
# kubectl apply -f ./kubernetes/frontend-service.yaml

# echo "Creating Ingress Object"
# kubectl apply -f ./kubernetes/ingress.yaml

