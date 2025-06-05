# Kubernetes Multi-Node Demo

This project demonstrates a multi-node Kubernetes setup using Minikube. It deploys a simple Node.js application across multiple nodes using pod anti-affinity rules.

## Prerequisites

- Minikube
- kubectl
- Docker
- Node.js (for local development)

## Setup Instructions

1. Start a multi-node Minikube cluster:
   ```bash
   minikube start --nodes 3 -p multinode-demo
   ```

2. Verify the nodes are running:
   ```bash
   kubectl get nodes
   ```

3. Build the Docker image:
   ```bash
   # Point shell to minikube's Docker daemon
   eval $(minikube -p multinode-demo docker-env)
   
   # Build the image
   docker build -t node-app:latest .
   ```

4. Deploy the application:
   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

5. Verify the deployment:
   ```bash
   kubectl get pods -o wide  # Check pod distribution across nodes
   kubectl get services      # Get service details
   ```

6. Access the application:
   ```bash
   minikube -p multinode-demo service node-app-service
   ```

## Cleanup

To delete the cluster:
```bash
minikube delete -p multinode-demo
```

## Architecture

- The application is deployed with 3 replicas
- Pod anti-affinity rules ensure pods are distributed across different nodes
- NodePort service exposes the application on port 30000
- Each pod provides basic system information including its hostname
