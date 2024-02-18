#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM archlinux:latest

ENV LANG="C.UTF-8"

# Update OS and base packages
RUN pacman -Syu --noconfirm

# Install fish
RUN pacman -S --needed fish && \
  printf "if type code-insiders > /dev/null 2>&1; and not type code > /dev/null 2>&1\n  alias code=code-insiders\nend" >> /etc/fish/conf.d/code_alias.fish

# Install user packages
RUN pacman -S --needed \
  clang \
  dotnet-core \
  gdb \
  jq \
  lldb \
  llvm \
  make \
  p7zip \
  python \
  rsync \
  rustup \
  valgrind \
  vim 

# Default to bash shell
ENV SHELL=/bin/bash \
  DOCKER_BUILDKIT=1

# Mount for docker-in-docker 
VOLUME [ "/var/lib/docker" ]

# Fire Docker/Moby script if needed
ENTRYPOINT [ "/usr/local/share/docker-init.sh", "/usr/local/share/ssh-init.sh"]
CMD [ "sleep", "infinity" ]

# [Optional] Install debugger for development of Codespaces - Not in resulting image by default
ARG DeveloperBuild
RUN if [ -z $DeveloperBuild ]; then \
  echo "not including debugger" ; \
  else \
  curl -sSL https://aka.ms/getvsdbgsh | bash /dev/stdin -v latest -l /vsdbg ; \
  fi
