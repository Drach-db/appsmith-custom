#!/bin/bash

install_dir="$1"

cd "$install_dir" \
&& echo "Start application..."

# Безопасное перемещение архива, только если он существует
if [[ -f "$install_dir/stacks/data/backup/appsmith-data.archive" ]]; then
  mv "$install_dir/stacks/data/backup/appsmith-data.archive" "$install_dir/stacks/data/restore"
fi

docker-compose up -d

wait_for_containers_start() {
    local timeout=$1
    while [[ $timeout -gt 0 ]]; do
        status_code="$(curl -s -o /dev/null -w "%{http_code}" http://localhost/api/v1 || true)"
        if [[ $status_code -eq 401 ]]; then
            break
        else
            echo -ne "Waiting for all containers to start. This check will timeout in $timeout seconds...\r\c"
        fi
        ((timeout--))
        sleep 1
    done
}

wait_for_containers_start 180

# Импорт БД
docker-compose exec -T appsmith appsmithctl import_db -f