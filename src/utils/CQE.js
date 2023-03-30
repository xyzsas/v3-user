const init24 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
const init18 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
export const terms = ['高一上学期', '高一下学期', '高二上学期', '高二下学期', '高三上学期', '高三下学期']
export const initGrade = {
  '思想品德': {
    '出勤情况': [...init24],
    '学习态度': [...init24],
    '团结协作': [...init24],
    '遵规守纪': [...init24],
    '诚实守信': [...init24],
    '文明礼仪': [...init24],
    '党团活动': [...init24],
    '公益活动': [...init24],
    '志愿服务': [...init24],
    '思想品德其他': [...init24]
  },
  '学业水平': {
    '国家课程': [...init24],
    '校本课程': [...init24],
    '研究性学习': [...init24]
  },
  '身心健康': {
    '体质监测': [...init24],
    '日常锻炼': [...init24],
    '运动特长': [...init24],
    '心理素质': [...init24],
    '自我修习': [...init24],
    '自我认知': [...init24],
    '未来规划': [...init24],
    '身心健康其他': [...init24]
  },
  '艺术素养': {
    '学校课程': [...init24],
    '个人提升': [...init24],
    '艺术特长': [...init24]
  },
  '社会实践': {
    '社区服务': [...init24],
    '社会实践': [...init24],
    '社团活动': [...init24],
    '规定性课程': [...init24],
    '自主性课程': [...init24]
  },
  '突出表现': ['', '', '', '', '', '']
}

export const fileFields = ['党团活动', '公益活动', '志愿服务', '思想品德其他', '研究性学习', '运动特长', '自我修习', '自我认知', '未来规划', '身心健康其他', '个人提升', '艺术特长', '社区服务', '社会实践', '社团活动', '规定性课程', '自主性课程']

export const initCredit = {
  '语文': [...init18],
  '数学': [...init18],
  '外语': [...init18],
  '思想政治': [...init18],
  '历史': [...init18],
  '地理': [...init18],
  '化学': [...init18],
  '信息技术': [...init18],
  '艺术': [...init18],
  '体育与健康': [...init18],
  '综合实践活动': [...init18],
  '劳动': [...init18],
  '其他': [...init18]
}

export const T = {
  '思想品德': {
    '出勤情况': ['按时到校，按时上下课，按时午休晚睡，按时参加学校、班级组织的各种活动，不迟到，不早退，不旷课，有事请假，按规定进出校门。', '无旷课或迟到少于2次，评价为10分；违规离开学校一次扣分，旷课1次或迟到2-3次评价为扣1分；旷课2次或迟到4-5次为3分；旷课3次以上或迟到6次以上扣10分', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '出勤情况', '思想品德'],
    '学习态度': ['学习动机明确，态度端正，掌握有效的学习策略，能够独立思考。', '课堂、自习时对待学习的态度（1-5分）；自治自动和作业完成情况(1-5分）；整理本整理情况（1-5分）；对待考试的态度、学习效果（1-5分）。正课和自习睡觉、玩手机等与学习无关的事情，抄作业等采用扣分规则，每发现一次扣1分。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '学习态度', '思想品德'],
    '团结协作': ['为人友善，相互尊重，相互包容，和睦相处，有团队意识，有集体荣誉感，主动协同他人搞好各项事务。', '各种集体活动参加情况（1-5分）、小组内是否服从小组长安排（1-5分）、宿舍内是否认真完成值日（1-5分）、自主管理团队内是否认真履行职责，服从管理（1-5分）。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '团结协作', '思想品德'],
    '遵规守纪': ['具有法律和规则意识；遵守公共秩序和社会规则；遵守学校和班级的规章制度。', '遵守法律法规，遵守学校的规章制度（20分）。不遵守交通规则，不遵守文明城市创建要求的每次扣2分，参与打架、非法聚堆等非正常集体活动一次扣5分；有顶撞师长重大违纪的扣10分；宿舍内影响他人休息1次扣1分；教室内影响他人学习1次扣1分；进入营业性网吧的1次扣3分，不服从宿管管理扣5分。本项20分扣完为止。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '遵规守纪', '思想品德'],
    '诚实守信': ['言行一致，知错就改；信守承诺，拒绝欺骗。', '言行一致，知错就改；信守承诺，拒绝欺骗。（20分）个人有1次及以上违反家庭公约及宿舍公约和班级公约扣5分。携带手机在教学区违规使用的发现1次扣5分；考试作弊扣20分。本项20分扣完为止。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '诚实守信', '思想品德'],
    '文明礼仪': ['仪表端正，举止得体；尊老爱幼，尊敬师长；礼貌待人；遵守社会公德。', '衣着得体，尊敬师长，文明交往，遵守社会公德。（20分）。化妆，烫发染发、不带首饰发现1次扣2分，不按规定穿校服一次扣2分，宿舍教室卫生区卫生不到位1次扣2分，影响他人文明观赏的1次扣2分，男女生交往过密影响校风校纪1次扣10分。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '文明礼仪', '思想品德'],
    '党团活动': ['勇于承担责任，积极组织和参与各类党团活动。', '优秀团员荣誉称号（校级1次加1分、市级1次加2分，省级1次加5分）、组织参加的党团活动的半小时以内的1次1分、组织参加的党团活动的半小时时以上1次加3分、活动内容及成效（1-10分）', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '党团活动', '思想品德'],
    '公益活动': ['每学期至少参加一次，持续时间不少于半天，实效性强。', '参加的公益活动内容半小时以上的1次2分，过程、成效（1-10分）。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '公益活动', '思想品德'],
    '志愿服务': ['每学期至少参加一次，持续时间不少于半天，实效性强。', '参加的志愿者服务活动半小时以上的1次2分，过程、成效（1-10分）。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '志愿服务', '思想品德'],
    '思想品德其他': ['', '未作说明但出现的事情，根据具体报综合素质评价委员会裁定。', '《中学生日常行为规范（修订）》、《中小学生守则》、《中共中央国务院关于进一步加强和改进未成年人思想道德建设的若干意见》、《中小学文明礼仪教育纲要》、《江苏省普通高中课程设置及教学指导意见》', '其他', '思想品德']
  },
  '学业水平': {
    '国家课程': ['根据自己的发展需要、兴趣特长和学习潜能选择学习内容并丰富和拓展知识领域。学习目标达成度高，模块检测质量高，完成必修、选修规定的学分。', '重视参与学习过程，对学习过程进行记录与评价，每学期必须完成国家课程要求内容，测试合格，赋予相应的学分，若测试不合格，不能获得学分。（语数外政完成1门2学分，其他每完成1门得1学分）', '《江苏省普通高中课程设置及教学指导意见》、《江苏省普通高中学生综合素质评价实施方案》', '国家课程', '学业水平'],
    '校本课程': ['根据个人发展需要和学习潜能选课，重视学习过程，拓展知识领域。每学期至少选择1门规定校本课程，达到规定的学时数且成绩合格。', '完成1门校本课程的选择，且修满学时，测试合格，赋予相应的学分，若测试不合格，不能获得学分。（完成1门的2学分）', '《江苏省普通高中课程设置及教学指导意见》、《江苏省普通高中学生综合素质评价实施方案》', '校本课程', '学业水平'],
    '研究性学习': ['积极参与研究性学习，制定研究性学习方案，有质量较高的研究性成果。', '参加研究性学习，完成研究任务的，获得当学期学分，否则不能获得相应的学分。优秀成果作为标志性成果上传。（每完成一次0.5学分）', '《江苏省普通高中课程设置及教学指导意见》、《江苏省普通高中学生综合素质评价实施方案》', '研究性学习', '学业水平']
  },
  '身心健康': {
    '体质监测': ['养成主动锻炼身体的习惯，改善和提高身体机能。 身高、体重、肺活量、身体运动能力、视力状况等达到《国家学生体质健康标准》要求。', '对学生身体指标检测体质进行测试，并记录结果（标准为90以上的20分，80以上的为15分，70以上的10分，60以上的5分，60以下的0分）', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '体质监测', '身心健康'],
    '日常锻炼': ['磨练自身的意志品质，培养团队精神。积极参加各种体育活动；体育课、课间操出勤率高。', '认真上好体育课（1-6分），按要求参加体育活动课（1-6），做两操认真，动作规范（1-6分），有参加体育锻炼的意识和良好的习惯（1-6分），积极参加运动会（1-6分），体育课和体育活动课缺席达到学期课时的1/10的本项为零分。', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '日常锻炼', '身心健康'],
    '运动特长': ['体育运动特长项目、体育运动的效果、参加体育竞赛活动及获奖等情况', '在校运会中获得单项前三名（加5分）；参加省教育部门组织或认可的体育竞赛活动获个人单项前6名或团体比赛前6名的主力队员（加10分），市教育部门组织或认可的体育竞赛活动个人单项前四名或团体比赛前四名的主力队员（加15分）；达到体育与健康课程标准规定的六级水平（加20分）。', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '运动特长', '身心健康'],
    '心理素质': ['学生的心理健康情况、科学生活方式', '参加学校组织的心理普测（1-3分），有效管理自己的情绪（1-3分），正确处理师生、同伴、家庭等人际关系（1-3分）；能够根据情境的要求约束自己的言行（1-3分）；主动控制极端情绪下行为的发生（1-3分）；具备抵御挫折的能力（1-3分）；主动寻求应对和克服困难的方法（1-3分）。', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '心理素质', '身心健康'],
    '自我修习': ['学生修习发展指导课程的情况', '积极参加学生生涯测评（1-5分）；按照要求修满一定数量的生涯课程（1-5分）', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '自我修习', '身心健康'],
    '自我认知': ['主动发展的意识，对自我的客观认识与评价', '制定本学期个人发展规划（1-5分）；规划执行情况（1-5分）', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '自我认知', '身心健康'],
    '未来规划': ['对未来的生涯规划等', '了解个人成长历程与生涯发展的关系（1-2分）；正确分析个人特质与潜能（1-2分）；了解探索个人特质与生活角色间的关系（1-2分）；关切教育发展、学习内涵与生涯之路（1-2分）；了解大学生涯与职业生活间相关资讯（1-2分）；认识人力资源供需与职业生活相关资讯（1-2分）；学会统整生涯资讯以完成生涯评估（1-2分）；运用决策技巧以规划行动方案（1-2分）；落实执行生涯抉择事项（1-2分）。', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '未来规划', '身心健康'],
    '身心健康其他': ['无法涵盖的个性特长等方面。', '', '《国家学生体质健康标准》《国务院办公厅转发教育部等部门关于进一步加强学校体育工作若干意见的通知》《中小学学生近视眼防控工作方案》以及其他相关规范性文件等《中小学心理健康教育指导纲要（2012年修订）》《江苏省普通高中学生综合素质评价实施方案》', '其他', '身心健康']
  },
  '艺术素养': {
    '学校课程': ['在音乐、美术及相关艺术选修课程的修习情况', '较好的审美趣味，阅读健康有益的文艺作品（1-10分）；具有一定的艺术欣赏能力（1-10分）；有较好的审美趣味（1-10分），阅读健康有益的文艺作品（1-10分）；认真上好音乐和美术课、成绩认定以合格（1-10分）。', '《江苏省普通高中学生综合素质评价实施方案》', '学校课程', '艺术素养'],
    '个人提升': ['在音乐、美术、舞蹈、戏剧、戏曲、影视、书法等方面表现出来的兴趣爱好以及代表作品', '每参加一项艺术活动培训半天以上（加5分），代表作品获奖情况（加5-20分）', '《江苏省普通高中学生综合素质评价实施方案》', '个人提升', '艺术素养'],
    '艺术特长': ['学生的艺术特长与参加演出、展览、比赛等艺术活动的经历和获奖情况', '在校内外大型文艺活动中有突出表现（1-5分）参加市教育行政部门组织或认可的各种音乐、美术等比赛并获奖（含集体项目）（1-5分）参加省教育部门组织或认可的音乐、美术等比赛中获奖的（含集体项目）（1-5分）担任领唱、指挥等并收到较好效果（1-5分）在校内外艺术活动中表现（1-5分）积极参加学校组织的艺术表演并能展示一定艺术才能（1-5分）积极参加学校艺术节活动（1-5分）参加班级、学校环境美化活动（1-5分）', '《江苏省普通高中学生综合素质评价实施方案》', '艺术特长', '艺术素养']
  },
  '社会实践': {
    '社区服务': ['每个人根据生活学习区域情况自觉主动参加社区服务活动，至少一次，每次不少于半天', '熟悉社区中与自己生活密切相关的公共场所、基础设施和组织机构（1-5分）。对社区的地理环境、人文环境、物产特色、民间风俗和传统节日有所了解,并萌发对家乡的关爱之情（1-5分）。愿意为社区建设和发展服务,有较强的服务意识和责任心,体验服务的充实与愉悦(1-5分)。关心社区中的重大活动和社区存在的主要问题,并尝试运用自己所学知识分析和解决具体问题,从中获得积极的感受(1-5分)。自觉维护社区形象。逐步形成建设良好生活环境的情感和态度(1-5分)。在服务的过程中学会交往、合作,懂得理解和尊重,形成团结意识和归属感，增强服务意识和责任感（1-5分）。社区服务1次以上，每增加一次加5分，满分30分。', '《江苏省普通高中课程设置及教学指导意见》《江苏省普通高中学生综合素质评价实施方案》', '社区服务', '社会实践'],
    '社会实践': ['每个人根据学校安排和生活学习的区域的情况特点，积极参加社会实践活动，至少一次，每次不少于半天。', '参加社会实践活动的达到时间要求和态度认真（1-5分）。活动的选择与活动设计评价（1-5分）。活动过程中的体验和收获：认识社会、研究社会问题的基本能力和人际交往，协作、适应环境等能力的发展情况（1-5分）。活动的成果和社会效益评价（1-5分）。活动过程中的创新性和实践性的体现情况（1-5分）。社会实践1次以上，每增加一次加5分，满分20分。', '《江苏省普通高中课程设置及教学指导意见》《江苏省普通高中学生综合素质评价实施方案》', '社会实践', '社会实践'],
    '社团活动': ['引领组织社团，争做社团活动领袖，积极参加社团组织各种活动。', '参加的社团达到规定次数的加4分、在社团中的职务（社长2分、副社长1分）、过程和成效（1-4分）。', '', '社团活动', '社会实践'],
    '规定性课程': ['内务班务校务实践、烹饪、志愿服务', '学会个人生活事务处理（1-5分），开展校园爱国卫生运动，增强爱班爱校的集体主义意识（1-5分），学会烧8道淮扬特色菜，传承家乡美食文化（1-5分），运用所学知识技提供服务，树立服务意识（1-5分）', '《江苏省扬州中学劳动教育课程方案》', '规定性课程', '社会实践'],
    '自主性课程': ['家务劳动类、绿化维护类、家禽养殖类、手工制作类、园艺苗圃类、西点烘焙类、饮品制作类、农耕栽培类、校外实践类、义卖义演类、儿童陪护类、技术实训类、职业体验类', '注重生活能力和良好劳动习惯培养，树立自立自强意识（1-5分）。经历工农业生产中物质财富创造过程，掌握相关技术，感受劳动创造价值（1-5分）。在服务性岗位上见习实习，树立服务意识（1-5分）。在公益劳动中强化社会责任感（1-5分）。每参加一项劳动半天以上并有劳动成果展示（一次加5分）', '', '自主性课程', '社会实践']
  }
}