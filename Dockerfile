FROM debian:stretch AS build

RUN apt update && \
    apt install -y curl \
                   jq

RUN curl https://circleci.com/api/v1.1/project/github/kkasai/react-demo/latest/artifacts?filter=successful \
    | jq 'map(select(.["path"] == "home/circleci/repo/build.tar.gz"))' \
    | jq '.[0]["url"]' \
    | xargs curl -o /tmp/build.tar.gz

RUN tar zxvf /tmp/build.tar.gz -C /tmp

FROM node:10.13-alpine

COPY --from=build /tmp/build /usr/src/app

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "/usr/src/app"]
