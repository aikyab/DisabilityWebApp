delete:
	kubectl delete all --all

deploy:
	chmod +x ./deploy.sh
	sh ./deploy.sh

test:
	kubectl apply -f kubernetes/frontend-deployment.yaml

getip:
	kubectl --namespace ingress-nginx get services -o wide -w ingress-nginx-controller

controller:
	chmod +x ingress/test.sh
	sh ingress/test.sh

deleteController:
	kubectl delete all --all -n ingress-nginx
	kubectl delete ns ingress-nginx