import { FunctionComponent } from "react";
import style from "./EmotionForm.module.scss";
import cn from "classnames";
interface Props {}
export const EmotionForm: FunctionComponent<Props> = ({}) => {
  return (
    <div className={style.form_Wrapper}>
      <form action="http://myserver.com" method="post">
        <div className="form-example">
          <label id="Post-description">Описание</label>
          <input id="Post-description" type="text" name="description" />
          <input type="submit" value="Save" />
        </div>
      </form>
      <form action="http://myserver.com" method="post">
        <input type="range" min="0" max="10" step="1" value="0" />
        <input id="Post-range" type="text" name="range" />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
