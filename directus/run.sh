echo ">>> Stopping container"
docker stop directus-local
echo ">>> Deleting container"
docker rm directus-local
#echo ">>> Deleting image"
#docker rmi directus-homemade
echo ">>> Building image"
docker build -t directus-homemade .
echo ">>> Starting Container"
docker run --name directus-local -p 8082:80 -d directus-homemade
echo "  Usage:"
echo "    docker exec -it directus-local bash"
