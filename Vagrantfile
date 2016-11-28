# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64" # Version del sistema operativo
  config.ssh.forward_agent = true # Permitir Conexiones SSHs
  config.vm.network "forwarded_port", guest: 3000, host: 3000 # PortForward
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024" # Personalizar la cantidad de memoria RAM
    vb.cpus = 1        # Personalizar la cantidad de CPUS
  end
  config.vm.provision :shell, :path => "setup.sh"
end