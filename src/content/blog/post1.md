---
title: 'xkite - Product Overview'
description: 'The team and I discuss the background and technical challenge we faced along the way in development xkite product tool suite.'
pubDate: 'Mar 29 2023'
heroImage: '/xkite-logo.webp'
---

# xkite makes it easy to protoype, test and deploy Apache Kafka

“Productivity is being able to do things that you were never able to do before.” - Franz Kafka

Whether it’s notifying shoppers there’s a package at the door or serving suggestions when a Netflix show has ended, events drive a lot of the functionality behind today’s apps.

With users generating billions of events each day, engineers at thousands of companies turn to Apache Kafka to collect, process, store and analyze data at scale. And it’s easy to see why, since Kafka is open source, battle-tested, fault-tolerant, scalable and has a track record dating back to 2011. Unfortunately for developers looking to add Kafka to their products, “setting up and managing Apache Kafka is no cakewalk,” as RedHat put it.

That’s why we built xkite – an open source suite of tools to prototype, test and monitor Apache Kafka – launching today in beta from OSLabs. With xkite, developers can skip the complex configuration and cloud-service contracts to get started running containerized Kafka clusters locally in minutes. When you’re ready to customize, xkite offers robust graphical and command line interfaces for configuration. And, when it’s time to deploy, xkite lets you export your setup with the click of a button.
Getting Started
We designed xkite with flexibility and portability in mind. To get started, all you need are the latest stable versions of Node/NPM and Docker.

With the Docker engine running on your system, just run `npx create-xkite <directory-name>` to install xkite into a new directory. To get started and launch the GUI, `cd` into the new directory and run `npm run dev`. xkite will open in your browser on localhost:3000 or the next available port.

Looking for a lighter weight option? You can run `npx create-xkite-cli` to install xkite with a command line-only interface, or run `npm install xkite-core` to install the core library that powers xkite and import it into an existing TypeScript or JavaScript application.

Now that you’ve got xkite up and running, here’s how it supports you at each stage of the development process:

## Kafka Prototyping

One of the biggest hurdles to using Kafka is just getting an environment up and running. That’s why xkite offers a turn-key setup that works with the click of a button. And, when you’re ready to start fine tuning the configuration to suit your project, xkite makes it easy to tweak the number of brokers and zookeepers, set ports, change data sources and data sinks and more.
To reduce dependencies and increase portability, xkite runs each of its services in its own Docker container. If you use the default configuration, you’ll see 13 containers running:

- **Kafka 1 & Kafka 2** each run separate Apache Kafka brokers (configurable to run more)
- **Spring** runs a containerized Java application that exposes an interface for working with Kafka servers and provides a simple consumer/producer instance
- **KSQL** provides a database pre-configured as a source for your Kafka brokers. You can query the database with a GUI.
- **KSQL Database CLI** provides a simple command line interface for interacting with the KSQL server
- **Zookeeper 1 & Zookeeper 2** supports the Kafka brokers with consensus coordination and other services
- **Prometheus** collects metrics from Kafka
- **JMX-Kafka1 & JMX-Kafka2** provides additional metrics to Prometheus
- **Grafana** provides visualization for metrics
- **Kafka-Connect** (for future use) lays the groundwork for future functionality to connect a variety of data sources and sinks
- **Jupyterhub** provides a Jupyter Notebook as a default data sink for Kafka. Configurable to use (For future use. Does not currently connect to anything.)

## Kafka Testing

After using xkite to configure a custom Kafka setup and deploying to a local Docker instance, users can immediately start testing their systems. Using a browser-based graphical user interface, you can dynamically add topics and test sending messages in real time to topics. And, if you’re using the default KSQL configuration, you can send test queries to and create streams from your database.

The xkite testing suite comes preconfigured with real-time metrics to confirm when topics have been added, as well as message request velocity per topic when testing messages.

## Kafka Performance Monitoring

xkite eliminates the need for developers to jump between Docker dashboards and busy, unordered Grafana graphs when monitoring a Kafka instance by offering integrated monitoring views for both Kafka and Docker metrics.

Kafka metrics are organized by Kafka system architecture, with tabs for monitoring basic analytics, cluster health, consumer metrics, producer metrics and partition metrics. Under the cluster health tab, for instance, you can keep an eye on Fetch Consumer Requests Per Broker, Consumer Latency Per Broker, Total Fetch Requests Per Broker and more. To make switching contexts easier, metrics are laid out consistently across the various tabs.

xkite also provides a neatly-organized dashboard for monitoring Docker key docker metrics, including status, time created and ports. You can even pause or restart a container from the same interface.

## Deploying to Existing Projects

Development teams also have the option of running xkite from within their existing codebase using the xkite-core library, allowing full flexibility to integrate configuration and deployment logic directly into an existing application without the need to engage with the full xkite package. Development teams can then use xkite-core to obtain and connect their xkite instance to existing microservices to act as system producers and consumers (architecture and implementation will vary based on use-case).

## Exporting Your Configuration

Once you’ve got everything set up just the way you like it, xkite makes it easy to export your configuration and take it with you. Just click a button and xkite will export a zip archive with everything you need to deploy your setup on any machine running Docker – including cloud deployments to AWS, Microsoft Azure and Google Cloud.

## What’s Next?

xkite is proudly offered as free and open source software under the MIT License, and today’s initial beta release is just the beginning. Our team is excited about the potential for xkite continue adding functionality that makes life easier for developers using Kafka.

### Upcoming milestones on our roadmap include:

#### Moving Functionality to Native Java APIs

xkite is mainly written in TypeScript and, other than our Java app running in the Spring container, uses KafkaJS to interface with Kafka. Kafka’s native APIs are written in Java, and KafkaJS only exposes a limited subset of features. A future version of xkite could move more functionality into the Spring container, which would eliminate a dependency and offer a more direct interface with Kafka’s producer/consumer functionality.

#### Connectivity Options for Cloud Deployments

While xkite currently facilitates local prototyping, testing and monitoring, adding connectivity to cloud deployments would allow developers to continue using xkite to monitor their apps in production environments.

#### Additional Data Source + Sink Configurations

Currently, xkite only fully supports KSQL as a data source. Adding Kafka-Connect integration serializers for input/output will enable developers to use the data source and sink of their choice. In particular, we are planning on integrating PSQL as an alternative data source and Jupyter Notebook and Apache Spark as data sinks. Adding more options could accommodate more potential use-cases and development teams.
