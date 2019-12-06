import React,{ lazy, Suspense } from "react"
import ReactMarkdown from "react-markdown/with-html"
const CodeBlock = lazy(() => import( /* webpackChunkName: 'CodeBlock' */ './components/code/code-block'))
const H1Tag = lazy(() => import( /* webpackChunkName: 'H1Tag' */ './components/heading/h1-heading'))
const H2Tag = lazy(() => import( /* webpackChunkName: 'H2Tag' */ './components/heading/h2-heading'))
const H3Tag = lazy(() => import( /* webpackChunkName: 'H3Tag' */ './components/heading/h3-heading'))
const H4Tag = lazy(() => import( /* webpackChunkName: 'H4Tag' */ './components/heading/h4-heading'))
const H5Tag = lazy(() => import( /* webpackChunkName: 'H5Tag' */ './components/heading/h5-heading'))
const H6Tag = lazy(() => import( /* webpackChunkName: 'H6Tag' */ './components/heading/h6-heading'))
const Blockquote = lazy(() => import( /* webpackChunkName: 'Blockquote' */ "./components/blockquote/blockquote"))
const Image = lazy(() => import( /* webpackChunkName: 'Image' */ "./components/image/image"))
const InlineCode = lazy(() => import( /* webpackChunkName: 'InlineCode' */ "./components/code/inline-code"))
const Paragraph = lazy(() => import( /* webpackChunkName: 'Paragraph' */ "./components/paragraph/paragraph"))
import Root from "./components/root/root"
const Table = lazy(() => import( /* webpackChunkName: 'Table' */ "./components/table/table"))
const Thead = lazy(() => import( /* webpackChunkName: 'Thead' */ "./components/table/thead"))
const Tbody = lazy(() => import( /* webpackChunkName: 'Tbody' */ "./components/table/tbody"))
const Trow = lazy(() => import( /* webpackChunkName: 'Trow' */ "./components/table/trow"))
const Tcell = lazy(() => import( /* webpackChunkName: 'Tcell' */ "./components/table/tcell"))
const Hr = lazy(() => import( /* webpackChunkName: 'Hr' */ "./components/breaks/hr"))
const Emphasis = lazy(() => import( /* webpackChunkName: 'Emphasis' */ "./components/text/em"))
const Strong = lazy(() => import( /* webpackChunkName: 'Strong' */ "./components/text/strong"))
const Delete = lazy(() => import( /* webpackChunkName: 'Delete' */ "./components/text/delete"))
const Link = lazy(() => import( /* webpackChunkName: 'Link' */ "./components/link/link"))
const List = lazy(() => import( /* webpackChunkName: 'List' */ "./components/list/list"))
const ListItem = lazy(() => import( /* webpackChunkName: 'ListItem' */ "./components/list/listitem"))
const Text = lazy(() => import( /* webpackChunkName: 'Text' */ "./components/text/text"))

class UDMarkdown extends React.Component {
    render() {
        return (
            <Suspense fallback={"Loading Markdown..."}>
            <ReactMarkdown source={this.props.markdown} renderers={{
                code: (code) => {
                    return <CodeBlock value={code.value} showLineNumbers={this.props.showLineNumbers} customStyle={this.props.styles.codeBlock} />
                },
                heading: (heading) => {
                    return heading.level == 1 ? <H1Tag value={heading.children} styles={this.props.styles.h1} /> :
                        heading.level == 2 ? <H2Tag value={heading.children} styles={this.props.styles.h2} /> :
                            heading.level == 3 ? <H3Tag value={heading.children} styles={this.props.styles.h3} /> :
                                heading.level == 4 ? <H4Tag value={heading.children} styles={this.props.styles.h4} /> :
                                    heading.level == 5 ? <H5Tag value={heading.children} styles={this.props.styles.h5} /> :
                                        heading.level == 6 ? <H6Tag value={heading.children} styles={this.props.styles.h6} /> :
                                            <div>No Heading</div>;
                },
                blockquote: (blockquote) => {
                    return <Blockquote value={blockquote.children} styles={this.props.styles} />
                },
                image: (image) => {
                    return <Image src={image.src} alt={image.alt} title={image.title} styles={this.props.styles} />
                },
                inlineCode: (inlineCode) => {
                    return <InlineCode value={inlineCode.children} styles={this.props.styles.inlinecode} />
                },
                paragraph: (paragraph) => {
                    return <Paragraph value={paragraph.children} styles={this.props.styles} />
                },
                root: (root) => {
                    return <Root value={root.children} styles={this.props.styles} />
                },
                table: (table) => {
                    return <Table value={table.children} styles={this.props.styles} />
                },
                tableHead: (tableHead) => {
                    return <Thead value={tableHead.children} styles={this.props.styles} />
                },
                tableBody: (tableBody) => {
                    return <Tbody value={tableBody.children} styles={this.props.styles} />
                },
                tableRow: (tableRow) => {
                    return <Trow value={tableRow.children} styles={this.props.styles} />
                },
                tableCell: (tableCell) => {
                    return <Tcell value={tableCell.children} styles={this.props.styles} />
                },
                thematicBreak: (thematicBreak) => {
                    return <Hr value={thematicBreak.children} styles={this.props.styles} />
                },
                emphasis: (emphasis) => {
                    return <Emphasis value={emphasis.children} styles={this.props.styles} />
                },
                strong: (strong) => {
                    return <Strong value={strong.children} styles={this.props.styles} />
                },
                delete: (del) => {
                    return <Delete value={del.children} styles={this.props.styles} />
                },
                link: (link) => {
                    return <Link href={link.href} value={link} styles={this.props.styles} />
                },
                linkReference: (linkReference) => {
                    return <Link href={linkReference.href} value={linkReference} styles={this.props.styles} />
                },
                list: (list) => {
                    return list.ordered ? <List value={list} styles={this.props.styles} /> : <List value={list} styles={this.props.styles} />
                },
                listItem: (listItem) => {
                    return <ListItem value={listItem.children} styles={this.props.styles} />
                },
                text: (text) => {
                    return <Text value={text.children} styles={this.props.styles} />
                }
            }} escapeHtml={this.props.escapeHtml} />
            </Suspense>
        )
    }
}

UniversalDashboard.register("ud-markdown", UDMarkdown);