delete:
	kubectl delete all --all

deploy:
	chmod +x ./deploy.sh
	sh ./deploy.sh

test:
	kubectl apply -f kubernetes/frontend-deployment.yaml