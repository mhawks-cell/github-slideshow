# Your GitHub Learning Lab Repository for Introducing GitHub

Welcome to **your** repository for your GitHub Learning Lab course. This repository will be used during the different activities that I will be guiding you through. See a word you don't understand? We've included an emoji 📖 next to some key terms. Click on it to see its definition.

Oh! I haven't introduced myself...

I'm the GitHub Learning Lab bot and I'm here to help guide you in your journey to learn and master the various topics covered in this course. I will be using Issue and Pull Request comments to communicate with you. In fact, I already added an issue for you to check out.

![issue tab](https://lab.github.com/public/images/issue_tab.png)

I'll meet you over there, can't wait to get started!

This course is using the :sparkles: open source project [reveal.js](https://github.com/hakimel/reveal.js/). In some cases we’ve made changes to the history so it would behave during class, so head to the original project repo to learn more about the cool people behind this project.

## Making a video from images

`script/make-video` combines a directory of images into an MP4 using [ffmpeg](https://ffmpeg.org/) (must be installed separately). Drop images into `images/` and run:

```sh
script/make-video
```

Options:

```sh
script/make-video --input images --output video.mp4 --duration 2 --width 1280 --height 720
```

Use `--dry-run` to print the ffmpeg command without generating a video, and `--help` for the full list of options.
