import type { Editor, BlockProperties } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const addBlock = (id: string, def: BlockProperties) => {
    opts.blocks.indexOf(id)! >= 0 &&
      editor.Blocks.add(id, {
        select: true,
        category: "Basic",
        ...def,
        ...opts.block(id),
      });
  };

  addBlock("link-block", {
    label: "Link Block",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
    content: {
      type: "link",
      editable: false,
      droppable: true,
      style: {
        display: "inline-block",
        padding: "5px",
        "min-height": "50px",
        "min-width": "50px",
      },
    },
  });

  addBlock("quote", {
    label: "Quote",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,
    content: {
      tagName: "h2",
      type: "text",
      content: `
      <svg style="display:block; margin: 0 auto 20px auto" width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3729 10.8143C16.3729 3.71173 23.1802 -1.0233 30.2202 0.189327V4.98211C26.5548 4.34692 23.762 5.38632 22.8311 8.15805C23.2966 8.04256 23.762 7.98482 24.1693 7.98482C27.0784 7.98482 29.2311 10.1791 29.2311 12.8931C29.2311 16.0113 26.8457 18.2056 23.122 18.2056C19.1657 18.2056 16.3729 15.5493 16.3729 10.8143ZM0.780212 10.8143C0.780212 3.71173 7.58749 -1.0233 14.6275 0.189327V4.98211C10.962 4.34692 8.1693 5.38632 7.2384 8.15805C7.70385 8.04256 8.1693 7.98482 8.57658 7.98482C11.4857 7.98482 13.6384 10.1791 13.6384 12.8931C13.6384 16.0113 11.2529 18.2056 7.5293 18.2056C3.57294 18.2056 0.780212 15.5493 0.780212 10.8143Z" fill="#FF702E"/>
    </svg>
      Desde o seu lançamento em 2018, a Binance, criou uma plataforma para oferecer conteúdo gratuito em diversos idiomas para os entusiastas das criptomoedas.”

      <div style="display: flex;justify-content: center;flex-direction: row;align-items: center;">
        <p style="font-family: Manrope;font-size: 13px;font-weight: 700;line-height: 19.5px;text-align: center; color: var(--Gray-Scale-Black, #070707);
">Priscila Cardoso</p>
          <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0 15px">
            <circle cx="2.5" cy="2.20557" r="2" fill="#969696"/>
          </svg>
        <p style="font-family: Manrope;font-size: 13px;font-weight: 500;line-height: 19.5px;text-align: center; color: #6D6D6D;">Deputada Federal</p>
      </div>
      `,

      style: {
        padding: "0 0 10px 0",
        width: "50%",
        "font-family": "Manrope",
        "font-size": "24px",
        "font-weight": "700",
        "line-height": "27px",
        "text-align": "center",
        margin: "0 auto",
        color: "var(--gray-100, #444444)",
      },
    },
  } as BlockProperties);

  addBlock("text-basic", {
    label: "Text section",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  });

  addBlock("title", {
    label: "Título",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
    activate: true,
    content: {
      tagName: "h1",
      type: "text",
      content: "Insira o seu texto aqui",
      style: {
        margin: 0,
        color: "#000",
        padding: "0 0 10px 0",
        "font-family": "Manrope",
        "font-size": "44px",
        "line-height": "61.6px",
        "letter-spacing": "-0.02em",
        "font-weight": 700,
        "text-align": "center",
      },
      draggable: !false,
      droppable: false,
      stylable: false,
      hoverable: false,
      locked: false,
    },
  } as BlockProperties);
};
