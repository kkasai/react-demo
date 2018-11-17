FROM debian:stretch AS build

RUN apt update && \
    apt install -y curl \
                   jq

RUN curl https://circleci.com/api/v1.1/project/github/kkasai/react-demo/latest/artifacts?filter=successful \
    | jq 'map(select(.["path"] == "home/circleci/repo/build.tar.gz"))' \
    | jq '.[0]["url"]' \
    | xargs curl -o /tmp/build.tar.gz

RUN tar zxvf /tmp/build.tar.gz -C /tmp


FROM nginx:1.15.6-alpine

COPY --from=build /tmp/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
