import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./components/code/code-block"
import H1Tag from "./components/heading/h1-heading";
import H2Tag from "./components/heading/h2-heading";
import H3Tag from "./components/heading/h3-heading";
import H4Tag from "./components/heading/h4-heading";
import H5Tag from "./components/heading/h5-heading";
import H6Tag from "./components/heading/h6-heading";
import Blockquote from "./components/blockquote/blockquote";
import Image from "./components/image/image";
import InlineCode from "./components/code/inline-code";
import Paragraph from "./components/paragraph/paragraph";
import Root from "./components/root/root";
import Table from "./components/table/table";
import Thead from "./components/table/thead";
import Tbody from "./components/table/tbody";
import Trow from "./components/table/trow";
import Tcell from "./components/table/tcell";
import Hr from "./components/breaks/hr";
import Emphasis from "./components/text/em";
import Strong from "./components/text/strong";
import Delete from "./components/text/delete";
import Link from "./components/link/link";
import List from "./components/list/list";
import ListItem from "./components/list/listitem";
// import Text from "./components/text/text";

class UDMarkdown extends React.Component {
    render(){      
        return(
                <ReactMarkdown source={this.props.markdown} renderers={{
                    code: (code) => {
                        return <CodeBlock value={code.value} language={code.language} showLineNumbers={this.props.showLineNumbers} customStyle={this.props.styles.codeBlock} />
                    },
                    heading: (heading) => {
                        return  heading.level == 1 ? <H1Tag value={heading.children} styles={this.props.styles.h1}/> : 
                                heading.level == 2 ? <H2Tag value={heading.children} styles={this.props.styles.h2}/> : 
                                heading.level == 3 ? <H3Tag value={heading.children} styles={this.props.styles.h3}/> :
                                heading.level == 4 ? <H4Tag value={heading.children} styles={this.props.styles.h4}/> :
                                heading.level == 5 ? <H5Tag value={heading.children} styles={this.props.styles.h5}/> :
                                heading.level == 6 ? <H6Tag value={heading.children} styles={this.props.styles.h6}/> :
                                                     <div>No Heading</div>;
                    },
                    blockquote: (blockquote) => {
                        return <Blockquote value={blockquote.children} styles={this.props.styles.blockquote}/>
                    },
                    image: (image) => {
                        return <Image src={image.src} alt={image.alt} title={image.title} styles={this.props.styles.img}/>
                    },
                    inlineCode: (inlineCode) => {
                        return <InlineCode value={inlineCode.children} styles={this.props.styles.inlinecode}/>
                    },
                    paragraph: (paragraph) => {
                        return <Paragraph value={paragraph.children} styles={this.props.styles.p}/>
                    },
                    root: (root) => {
                        return <Root value={root.children} styles={this.props.styles.root}/>
                    },
                    table: (table) => {
                        return <Table value={table.children} styles={this.props.styles.table}/>
                    },
                    tableHead: (tableHead) => {
                        return <Thead value={tableHead.children} styles={this.props.styles.table.thead}/>
                    },
                    tableBody: (tableBody) => {
                        return <Tbody value={tableBody.children} styles={this.props.styles.table.tbody}/>
                    },
                    tableRow: (tableRow) => {
                        return <Trow value={tableRow.children} styles={this.props.styles.table.tbody.trow}/>
                    },
                    tableCell: (tableCell) => {
                        return <Tcell value={tableCell.children} styles={this.props.styles.table.tbody.trow.td}/>
                    },
                    thematicBreak: (thematicBreak) => {
                        return <Hr value={thematicBreak.children} styles={this.props.styles.hr}/>
                    },
                    emphasis: (emphasis) => {
                        return <Emphasis value={emphasis.children} styles={this.props.styles.em}/>
                    },
                    strong: (strong) => {
                        return <Strong value={strong.children} styles={this.props.styles.strong}/>
                    },
                    delete: (del) => {
                        return <Delete value={del.children} styles={this.props.styles.delete}/>
                    },
                    link: (link) => {
                        return <Link href={link.href} value={link} styles={this.props.styles.link}/>
                    },
                    linkReference: (linkReference) => {
                        return <Link href={linkReference.href} value={linkReference} styles={this.props.styles.link}/>
                    },
                    list: (list) => {
                        return list.ordered ? <List value={list} styles={this.props.styles.list.ol}/> : <List value={list} styles={this.props.styles.list.ul}/>
                    },
                    listItem: (listItem) => {
                        return <ListItem value={listItem.children} styles={this.props.styles.list.listitem}/>
                    }
                }} escapeHtml={this.props.escapeHtml} />
        )
    }
}

UniversalDashboard.register("ud-markdown", UDMarkdown);