const podcastsSvg = document.querySelectorAll('.podcasts__svg');
const podcastsPause = document.querySelectorAll('.podcasts__pause');

podcastsSvg.forEach(svg => svg.addEventListener('click', () => {
  podcastsSvg.forEach(svg => {
    svg.classList.remove('podcasts__svg--closed');
  })
  podcastsPause.forEach(svg => {
    svg.classList.remove('podcasts__pause--active');
  })
  svg.classList.add('podcasts__svg--closed');
  svg.parentNode.querySelector('.podcasts__pause').classList.add('podcasts__pause--active')
}))

podcastsPause.forEach(svg => svg.addEventListener('click', () => {
  svg.classList.remove('podcasts__pause--active');
  svg.parentNode.querySelector('.podcasts__svg').classList.remove('podcasts__svg--closed')
}))

