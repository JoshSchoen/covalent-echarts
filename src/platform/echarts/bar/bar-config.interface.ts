import { ITdTooltip, ITdBarSeries, ITdXAxisConfig, ITdYAxisConfig } from '../';

interface ITdBarConfig {
    title?: any;
    toolbox?: any;
    xAxis?: ITdXAxisConfig[];
    yAxis?: ITdYAxisConfig[];
    series?: ITdBarSeries[];
    tooltip?: ITdTooltip;
    legend?: any;
    backgroundColor?: any;
    color?: any;
    renderAsImage?: boolean;
    calculable?: boolean;
    animation?: boolean;
    timeline?: any;
    dataRange?: any;
    dataZoom?: any;
    grid?: any;
    polar?: any;
    radiusAxis?: any;
    angleAxis?: any;
    radar?: any;
    visualMap?: any;
    axisPointer?: any;
    brush?: any;
    geo?: any;
    parallel?: any;
    parallelAxis?: any;
    singleAxis?: any;
    graphic?: any;
    calendar?: any;
    dataset?: any;
    aria?: any;
    textStyle?: any;
    Animation?: any;
    animationThreshold?: any;
    animationDuration?: any;
    animationEasing?: any;
    animationDelay?: any;
    animationDurationUpdate?: any;
    animationEasingUpdate?: any;
    animationDelayUpdate?: any;
    blendMode?: any;
    hoverLayerThreshold?: any;
    useUTC?: any;
}

export { ITdBarConfig };
