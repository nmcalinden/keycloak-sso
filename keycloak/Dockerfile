FROM alpine:3.16.2

RUN apk update

ARG KEYCLOAK_VERSION=20.0.0
ENV KEYCLOAK_VERSION=$KEYCLOAK_VERSION
ENV KC_SPI_THEME_DEFAULT=keycloak

WORKDIR /home/
RUN apk --no-cache add \
        openjdk11 \
        wget \
        bash \
        unzip \
    && wget https://github.com/keycloak/keycloak/releases/download/${KEYCLOAK_VERSION}/keycloak-${KEYCLOAK_VERSION}.zip && \
    unzip keycloak-${KEYCLOAK_VERSION}.zip && \
    rm keycloak-${KEYCLOAK_VERSION}.zip && \
    java --version

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

EXPOSE 8085
ENTRYPOINT ["bash", "-c", "/home/keycloak-$KEYCLOAK_VERSION/bin/kc.sh start-dev --http-port=8085"]
