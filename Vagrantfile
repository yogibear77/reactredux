# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
PROJECTS_HOME = ENV['PROJECTS_HOME'] || "../../"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :private_network, :ip => "172.17.1.108"
    if PROJECTS_HOME
      config.vm.synced_folder PROJECTS_HOME, "/srv/projects"
	end

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end
  config.vm.provision "shell", inline: "cd /vagrant/scripts && bash install.sh"
end