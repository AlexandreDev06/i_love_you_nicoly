FROM ruby:3.0.0

ENV NODE_VERSION 12
ENV INSTALL_PATH /opt/app

RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq
RUN apt-get install -y --no-install-recommends nodejs postgresql-client \
      locales yarn

WORKDIR /i_love_you_nicoly

COPY . .
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]