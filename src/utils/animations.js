export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTerget, secondTarget, animationProps)=>{
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(firstTerget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')

    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')
}   