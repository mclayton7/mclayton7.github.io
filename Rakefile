require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame eg. "kippt/jekyll-incorporated"
GITHUB_REPONAME = "mclayton7/mclayton7.github.io"


namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
  end

  desc "Commit site"
  task :commit do
    puts "\n## Staging modified files"
    status = system("git add -A")
    puts status ? "Success" : "Failed"
    puts "\n## Committing a site build at #{Time.now.utc}"
    message = "Build site at #{Time.now.utc}"
    status = system("git commit -m \"#{message}\"")
    puts status ? "Success" : "Failed"
    puts "\n## Pushing commits to remote"
    status = system("git push origin source")
    puts status ? "Success" : "Failed"
  end

  desc "Generate and publish blog"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
      system "git push origin master --force"
    end
  end
end
