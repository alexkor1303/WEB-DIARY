"use client";
import { useState } from "react";
import { Block, Button, Htag, ModalWindow } from "../../app/components/index";
import style from "./emonotes.module.scss";

export default function Emotional() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.main_wrapper}>
      <Block>
        <div className={style.upper_block_wrapper}>
          <Htag tag="h1">Create new emotional note</Htag>
          <Button onClick={() => setOpen(true)} text="+" />
        </div>
      </Block>
      <ModalWindow isopened={open} onClick={() => setOpen(false)} />
      <Block>
        <div className={style.lower_block_wrapper}>
          <Htag tag="h1">History</Htag>
        </div>
      </Block>
    </div>
  );
}
