import React from 'react'
import Typography from '@material-ui/core/Typography';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const MainpageReferenceText = (
    <React.Fragment>
    <DialogTitle>Справка</DialogTitle>
    <DialogContent>
        <Typography variant="h5" gutterBottom paragraph>Происхождение</Typography>
        <Typography variant="body1" gutterBottom paragraph>
            Джон Конвей заинтересовался проблемой, предложенной в 1940-х годах известным математиком Джоном фон Нейманом, который пытался создать гипотетическую машину, которая может воспроизводить сама себя. Джону фон Нейману удалось создать математическую модель такой машины с очень сложными правилами. Конвей попытался упростить идеи, предложенные Нейманом, и в конце концов ему удалось создать правила, которые стали правилами игры «Жизнь». Впервые описание этой игры было опубликовано в октябрьском (1970 год) выпуске журнала Scientific American, в рубрике «Математические игры» Мартина Гарднера (Martin Gardner)
            </Typography>

        <Typography variant="h5" gutterBottom paragraph>Правила игры</Typography>
        <Typography variant="body1" gutterBottom>
            <ul>
                <li>Действие игры происходит во "Вселенной" - это плоскость размеченная на клетки</li>
                <li>Каждая клетка может находиться в двух состояниях: быть «живой» (заполненной) или быть «мёртвой» (пустой).</li>
                <li>У клетки есть восемь соседей, окружающих её</li>
                <li>Начальное положение клеток считается первым поколением. Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам:
                        <ul>
                        <li>в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;</li>
                        <li>если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)</li>
                    </ul>
                </li>
                <li>Игра прекращается, если
                        <ul>
                        <li>на поле не останется ни одной «живой» клетки</li>
                        <li>конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же на одном из более ранних шагов (складывается периодическая конфигурация)</li>
                        <li>при очередном шаге ни одна из клеток не меняет своего состояния (складывается стабильная конфигурация; предыдущее правило, вырожденное до одного шага назад)</li>
                    </ul>
                </li>
            </ul>
            <p>Эти простые правила приводят к огромному разнообразию форм, которые могут возникнуть в игре.</p>
            <p>Игрок не принимает прямого участия в игре, а лишь расставляет или генерирует начальную конфигурацию «живых» клеток, которые затем взаимодействуют согласно правилам уже без его участия (он является наблюдателем).</p>
        </Typography>
    </DialogContent>
</React.Fragment>

)
export default MainpageReferenceText