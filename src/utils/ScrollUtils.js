export default class ScrollUtils
{

    static scrollTo(element, to, duration)
    {
        let start = document.querySelector(element).scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        let animateScroll = function ()
        {
            currentTime += increment;
            document.querySelector(element).scrollTop = ScrollUtils.easeInOutQuad(currentTime, start, change, duration);
            if (currentTime < duration)
            {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };

    static scroll(querySelector){
        document.querySelector(querySelector).scrollIntoView({
            behavior: 'smooth'
        });
    }

    static easeInOutQuad(t, b, c, d)
    {
        t /= d / 2;
        if (t < 1)
        {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

}